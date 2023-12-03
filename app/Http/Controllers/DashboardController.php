<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    public function dashboard(User $user) {
        $users = $user->with('position')
        ->filter(request(['search']))
        ->paginate(6)
        ->withQueryString();
        
        return Inertia::render('Dashboard/Dashboard', [
            'title' => 'Dashboard',
            'users' => UserResource::collection($users),
        ]);
    }

    public function show(User $user) {
        return Inertia::render('Dashboard/Detail', [
            'title' => 'Detail',
            'user' => $user
        ]);
    }

    public function history(User $user) {
        $users = $user->with('position')
        ->filter(request(['search']))
        ->paginate(6)
        ->withQueryString();
        return Inertia::render('Dashboard/History', [
            'title' => 'Riwayat Presensi',
            'users' => UserResource::collection($users)
        ]);
    }

    public function destroy(User $user)  
    {   
        $user->delete();
        return Redirect::route('dashboard')->with('message', 'Data Karyawan Berhasil di Hapus');
    }
}
