<?php

namespace Database\Seeders;

use App\Models\UserPosition;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserPosition::create([
            'user_nik' => '22104410046',
            'position_id' => 1
        ]);

        $data = [
            ['22104410012', 2],
            ['22104410014', 2],
            ['22104410028', 2],
            ['22104410039', 2],
            ['22104410055', 2],
            ['22104410057', 2],
            ['22104410065', 2],

        ];

        foreach ($data as $entry) {
            UserPosition::create([
                'user_nik' => $entry[0],
                'position_id' => $entry[1],
            ]);
        }
    }
}
