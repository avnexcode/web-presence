<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use App\Models\Staff;
use App\Models\Manager;
use Illuminate\Database\Seeder;
use Database\Seeders\UsersSeeder;
use Illuminate\Foundation\Auth\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'Muhammad Fauzi Nur Aziz',
            'email' => 'axnvee18@gmail.com',
            'password' => bcrypt('password'),
            'is_admin' => true,
        ]);
        \App\Models\User::create([
            'name' => 'Rafi Andrea Lesmana',
            'email' => 'andrea@gmail.com',
            'password' => bcrypt('password'),
            'is_manager' => true,
        ]);
        \App\Models\User::create([
            'name' => 'Rafi Ari Fiandi',
            'email' => 'fiandi@gmail.com',
            'password' => bcrypt('password'),
            'is_staff' => true
        ]);

        Admin::create([
            'admin_id' => 'adm001',
            'user_id' => '1',
            'arsip' => 'arsip_presence_staff', 
        ]);
        
        // Managers 
        Manager::create([
            'user_id' => '2',
            'manager_id' => 'm001',
        ]);
        
        // Staff
        Staff::create([
            'user_id' => '3',
            'staff_id' => 'stf001', 
            'alfa' => false,
            'izin' => false,
            'sakit' => false,
        ]);  

        // $admin = User::create([
        //     'nik' => '22104410046',
        //     'name' => 'John Doe',
        //     'email' => 'john@doe.com',
        //     'password' => bcrypt('secret'),
        //     'is_admin' => true,
        // ]);

        // // Create related admin record
        // Admin::create([
        //     'admin_id' => 'adm001',
        //     'arsip' => 'arsip_admin_john',
        // ]);

        // // Create manager user
        // $manager = User::create([
        //     'nik' => '22104410047',
        //     'name' => 'Jane Smith',
        //     'email' => 'jane@smith.com', 
        //     'password' => bcrypt('secret'),
        //     'is_manager' => true
        // ]);

        // // Create related manager record
        // Manager::create([
        //     'manager_id' => 'm001',
        // ]);

        // // Create staff user
        // $staff = User::create([
        //     'nik' => '22104410048',
        //     'name' => 'Bob Wilson',
        //     'email' => 'bob@wilson.com',
        //     'password' => bcrypt('secret'),
        //     'is_staff' => true
        // ]);

        // // Create related staff record
        // Staff::create([
        //     'staff_id' => 'stf001', 
        //     'alfa' => false,
        //     'izin' => false,
        //     'sakit' => false,
        // ]);

    }
}
