<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard() {
        return Inertia::render('Dashboard', [
            'title' => 'Dashboard',
            'users' => User::all()
        ]);
    }
}
