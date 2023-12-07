<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use App\Models\Staff;
use Illuminate\Database\Seeder;
use Database\Seeders\AdminSeeder;
use Database\Seeders\StaffSeeder;
use Database\Seeders\UsersSeeder;
use Database\Seeders\PositionSeeder;
use Illuminate\Foundation\Auth\User;
use Database\Seeders\AttendanceSeeder;
use Database\Seeders\UserPositionSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        \App\Models\User::create([
            'nik' => '22104410046',
            'name' => 'MUHAMMAD FAUZI NUR AZIZ',
            'email' => 'aziz@gmail.com',
            'password' => bcrypt('password'),
        ]);
        \App\Models\User::create([
            'nik' => '22104410014',
            'name' => 'RAFI ANDREA LESMANA',
            'email' => 'andrea@gmail.com',
            'password' => bcrypt('password'),
        ]);
        \App\Models\User::create([
            'nik' => '22104410057',
            'name' => 'RAFI ARI FIANDI',
            'email' => 'fiandi@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $data = [
            ['22104410012', 'ALDY IBNU FAIZAL', 'aldy@gmail.com', bcrypt('password')],
            ['22104410028', 'EKA PRASETIAWAN', 'eka@gmail.com', bcrypt('password')],
            ['22104410039', 'ERWAN', 'erwan@gmail.com', bcrypt('password')],
            ['22104410055', 'JIHAN KHANSA NADHILA', 'jihan@gmail.com', bcrypt('password')],
            ['22104410065', 'ALFIAN ANWAR SHODIQI', 'alfian@gmail.com', bcrypt('password')],
        ];

        foreach ($data as $userData) {
            User::create([
                'nik' => $userData[0],
                'name' => $userData[1],
                'email' => $userData[2],
                'password' => $userData[3],
            ]);
        }

        $this->call([
            PositionSeeder::class,
            AdminSeeder::class,
            StaffSeeder::class,
            UserPositionSeeder::class,
            AttendanceSeeder::class,
        ]);
    }
}
