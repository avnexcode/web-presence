<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Attendance;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $users = User::all();

        foreach ($users as $user) {
            Attendance::create([
                'user_nik' => $user->nik,
                'presensi' => $faker->randomElement(['Datang', 'Pulang']),
                'date' => $faker->date,
                'time' => $faker->dateTimeThisMonth(),
            ]);
        }
    }
}
