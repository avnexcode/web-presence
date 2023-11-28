<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard/Edit', [
            'title' => 'Edit Data Karyawan'
        ]);
    }
}
