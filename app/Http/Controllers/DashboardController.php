<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard() {
        return Inertia::render('Dashboard', [
            'title' => 'Dashboard',
            'users' => new UserResource(User::latest()
            ->filter(request(['search']))
            ->paginate(6)
            ->withQueryString())
        ]);
    }
}
