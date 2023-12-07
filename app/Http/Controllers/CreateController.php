<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Controller;
use App\Models\UserPosition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;

class CreateController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard/Create', [
            'title' => 'Tambah Data Karyawan'
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $rules = [
            'nik' => ['unique:users','required', 'min:10'],
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email:dns', 'unique:users'],
            'password' => ['required', 'min:8']
        ];

        
        $validatedData = $request->validate($rules,[
            'nik.unique' => 'Nomor induk karyawan sudah digunakan oleh staff lain.',
            'email.unique' => 'Alamat email sudah digunakan oleh staff lain.'
        ]);
        
        $userPosition = [
            'user_nik' => $validatedData['nik'],
            'position_id' => 2
        ];

        $validatedData['password'] = Hash::make($request->password);

        User::create($validatedData);

        UserPosition::create($userPosition);

        return redirect('/dashboard')->with('message', 'Data Karyawan Baru Berhasil Ditambahkan!');
    }
}
