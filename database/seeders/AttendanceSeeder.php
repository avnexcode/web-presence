<?php

namespace Database\Seeders;

use App\Models\Attendance;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Faker\Factory as Faker;
class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        Attendance::create([
            'user_nik' => 22104410014,
            'presensi' => $faker->randomElement(['Datang', 'Pulang']),
            'waktu' => $faker->dateTimeThisMonth(),
        ]);
        Attendance::create([
            'user_nik' => 22104410014,
            'presensi' => $faker->randomElement(['Datang', 'Pulang']),
            'waktu' => $faker->dateTimeThisMonth(),
        ]);
        Attendance::create([
            'user_nik' => 22104410014,
            'presensi' => $faker->randomElement(['Datang', 'Pulang']),
            'waktu' => $faker->dateTimeThisMonth(),
        ]);
    }
}
