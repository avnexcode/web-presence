<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard/Create', [
            'title' => 'Tambah Data Karyawan'
        ]);
    }
}
