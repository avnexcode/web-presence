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
        
        return Inertia::render('Dashboard', [
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

    public function destroy(User $user)  
    {   dd($user);
        $user->delete();
        
        return Redirect::route('dashboard'); 
    }
}
