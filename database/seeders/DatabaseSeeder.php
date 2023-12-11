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

        // $data = [
        //     ['22104410012', 'ALDY IBNU FAIZAL', 'aldy@gmail.com', bcrypt('password')],
        //     ['22104410028', 'EKA PRASETIAWAN', 'eka@gmail.com', bcrypt('password')],
        //     ['22104410039', 'ERWAN', 'erwan@gmail.com', bcrypt('password')],
        //     ['22104410055', 'JIHAN KHANSA NADHILA', 'jihan@gmail.com', bcrypt('password')],
        //     ['22104410065', 'ALFIAN ANWAR SHODIQI', 'alfian@gmail.com', bcrypt('password')],
        // ];

        $data = [
            ['22104410004', 'MUHAMMAD IKHSAN', 'ikhsan@gmail.com', bcrypt('password')],
            ['22104410006', 'DIVA ALDITA PUTRI SAFFANAH SAIDIYAH', 'diva@gmail.com', bcrypt('password')],
            ['22104410010', 'VIRGANDA RIMBA ASMARA', 'virganda@gmail.com', bcrypt('password')],
            ['22104410011', 'ZOULVIA HANEST KHINANTI', 'zoulvia@gmail.com', bcrypt('password')],
            ['22104410012', 'ALDY IBNU FAIZAL', 'aldy@gmail.com', bcrypt('password')],
            ['22104410013', 'RIZKY YUNIZ TERESYA', 'rizky@gmail.com', bcrypt('password')],
            ['22104410015', 'MUHAMMAD ROHID AL FARUQ', 'rohid@gmail.com', bcrypt('password')],
            ['22104410017', 'TANDIYO DWI OKTAVIAN', 'tandiyo@gmail.com', bcrypt('password')],
            ['22104410018', 'WAHYU NUR IBRAHIM', 'wahyu@gmail.com', bcrypt('password')],
            ['22104410021', 'UMI HANIK', 'umi@gmail.com', bcrypt('password')],
            ['22104410026', 'KHARIRATUL ISTIQLALIYAH', 'khariratul@gmail.com', bcrypt('password')],
            ['22104410028', 'EKA PRASETIAWAN', 'eka@gmail.com', bcrypt('password')],
            ['22104410029', 'SETYO ARI RAMADHAN', 'setyo@gmail.com', bcrypt('password')],
            ['22104410032', 'AFIANA SEPTI LAILI', 'afiana@gmail.com', bcrypt('password')],
            ['22104410033', 'BAGUS DZAKIY RAHMAN SAPUTRA', 'bagus@gmail.com', bcrypt('password')],
            ['22104410034', 'ADITYA AKBAR RIZKY KARINDRA', 'aditya@gmail.com', bcrypt('password')],
            ['22104410035', 'MUHAMMAD DANISH HAFIZZI', 'danish@gmail.com', bcrypt('password')],
            ['22104410037', 'IBNU ABIZAID FISABILILLAH', 'ibnu@gmail.com', bcrypt('password')],
            ['22104410039', 'ERWAN', 'erwan@gmail.com', bcrypt('password')],
            ['22104410044', 'ASSHYFFATUL ANA NI\'MAH', 'asshyffatul@gmail.com', bcrypt('password')],
            ['22104410045', 'MUHAMMAD LAZUARDI AL GHIFFARY', 'lazuardi@gmail.com', bcrypt('password')],
            ['22104410047', 'JONATHAN SETYA WIDAYAT', 'jonathan@gmail.com', bcrypt('password')],
            ['22104410048', 'MOCHAMAD BRILIAN BANI ADAM', 'brilian@gmail.com', bcrypt('password')],
            ['22104410049', 'INES RAHAYU TYAS', 'ines@gmail.com', bcrypt('password')],
            ['22104410050', 'NABILLAH RACHELIA MEYSHITA', 'nabillah@gmail.com', bcrypt('password')],
            ['22104410051', 'NIMAS AYU ANGGUN KHARISMA', 'nimas@gmail.com', bcrypt('password')],
            ['22104410054', 'MUHAMAD GUS AMIX KUSUMA', 'gus@gmail.com', bcrypt('password')],
            ['22104410055', 'JIHAN KHANSA NADHILA', 'jihan@gmail.com', bcrypt('password')],
            ['22104410056', 'ANDRE RIZKY PANGESTU', 'andre@gmail.com', bcrypt('password')],
            ['22104410059', 'YOGA RAMADHANI', 'yoga@gmail.com', bcrypt('password')],
            ['22104410060', 'ADHI EKA SYAHPUTRA', 'adhi@gmail.com', bcrypt('password')],
            ['22104410061', 'MUHAMMAD RAFA RUCHMADIANANTA', 'rafa@gmail.com', bcrypt('password')],
            ['22104410062', 'BINTANG LAILATUL MUKAROMAH', 'bintang@gmail.com', bcrypt('password')],
            ['22104410063', 'MOCH. ICHWAN ALIF KURNIAWAN', 'ichwan@gmail.com', bcrypt('password')],
            ['22104410064', 'ADE EKA SAPUTRA', 'ade@gmail.com', bcrypt('password')],
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
