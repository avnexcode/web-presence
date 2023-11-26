<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class User extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'Muhammad Fauzi Nur Aziz',
            'employee_nik' => '123',
            'email' => 'axnvee18@gmail.com',
            'password' => bcrypt('password')
        ]);
    }
}
