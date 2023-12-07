<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Staff;
use Inertia\Controller;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Carbon\Carbon;

class PresenceController extends Controller
{
    public function index()
    {

        return Inertia::render('Presence/Presence', [
            'title' => 'Presence',
        ]);
    }

    public function presence(Request $request)
    {
        $request->validate([
            'nik' => 'required',
            'password' => 'required'
        ]);
    
        $user = User::where('nik', $request->nik)->first();
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            return Redirect::back()->with('error', 'Invalid credentials');
        }
        
        $attendance = [
            'user_nik' => $user->nik,
            'presensi' => $request->presensi,
            'date' => $request->date,
            'time' => $request->time,
        ];
        
        dd($attendance);
        dd($user->name);
        
        Attendance::created($attendance);
    
        return Redirect::to('/dashboard/presence');
    }
}
