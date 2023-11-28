<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard/Detail', [
            'title' => 'Detail Data Karyawan'
        ]);
    }
}
