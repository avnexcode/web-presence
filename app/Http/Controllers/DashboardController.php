<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

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
}
