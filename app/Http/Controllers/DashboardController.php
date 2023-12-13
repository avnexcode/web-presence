<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use App\Models\Position;
use App\Models\Attendance;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\AttendanceResource;

class DashboardController extends Controller
{
    public function dashboard(User $user)
    {
        $users = $user->with(['positions'])
            ->whereHas('positions.staff')
            ->filter(request(['search']))
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Dashboard/Dashboard', [
            'title' => 'Dashboard',
            'users' => UserResource::collection($users),
            'userName' => $user->whereHas('positions.staff')->get('name'),
            'positions' => Position::all(),
        ]);
    }

    public function show(User $user)
    {
        return Inertia::render('Dashboard/Detail', [
            'title' => 'Detail',
            'user' => $user
        ]);
    }

    public function history()
    {
        $attendances = Attendance::with('user')
            ->filter(request(['search']))
            ->selectRaw('*, DATE_FORMAT(date, "%d-%m-%Y") as formatted_date')
            ->paginate(30)
            ->withQueryString();

        return Inertia::render('Dashboard/History', [
            'title' => 'Riwayat Presensi',
            'attendances' => AttendanceResource::collection($attendances),
            'userName' => User::whereHas('positions.staff')->get('name'),
        ]);
    }

    public function statement()
    {
        return Inertia::render('Dashboard/Statement', [
            'title' => 'Laporan'
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return Redirect::route('dashboard')->with('message', 'Data Karyawan Berhasil di Hapus');
    }

    public function showLaporan() {
        return Inertia::render('Dashboard/DetailLaporan', [
            'tile' => 'Detail Laporan'
        ]);
    }
}
