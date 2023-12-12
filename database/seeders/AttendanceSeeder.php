<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Attendance;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AttendanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $start_date = Carbon::parse('2023-12-01');
        $end_date = Carbon::parse('2023-12-31');

        $data = [
            ['22104410004'], ['22104410006'], ['22104410010'], ['22104410011'],
            ['22104410012'], ['22104410013'], ['22104410015'], ['22104410017'],
            ['22104410018'], ['22104410021'], ['22104410026'], ['22104410028'],
            ['22104410029'], ['22104410032'], ['22104410033'], ['22104410034'],
            ['22104410035'], ['22104410037'], ['22104410039'], ['22104410044'],
            ['22104410045'], ['22104410047'], ['22104410048'], ['22104410049'],
            ['22104410050'], ['22104410051'], ['22104410054'], ['22104410055'],
            ['22104410056'], ['22104410059'], ['22104410060'], ['22104410061'],
            ['22104410062'], ['22104410063'], ['22104410064'], ['22104410065'],
        ];

        foreach ($data as $attendance) {
            $nik = $attendance[0];
            $date = clone $start_date;

            while ($date->lte($end_date)) {
                $this->createAttendance($nik, 'Datang', $date->copy()->setHour(6)->setMinute(30)->setSecond(0));
                $this->createAttendance($nik, 'Pulang', $date->copy()->setHour(15)->setMinute(30)->setSecond(0));
                $date->addDay();
            }
        }
    }

    private function createAttendance($nik, $presensi, $datetime)
    {
        DB::table('attendances')->insert([
            'user_nik' => $nik,
            'presensi' => $presensi,
            'date' => $datetime->format('Y-m-d'),
            'time' => $datetime->format('H:i:s'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
