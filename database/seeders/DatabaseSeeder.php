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
            'nik' => '22104410046',
            'name' => 'Muhammad Fauzi Nur Aziz',
            'email' => 'axnvee18@gmail.com',
            'password' => bcrypt('password'),
            'position_id' => 1
        ]);
        \App\Models\User::create([
            'nik' => '22104410014',
            'name' => 'Rafi Andrea Lesmana',
            'email' => 'andrea@gmail.com',
            'password' => bcrypt('password'),
            'position_id' => 2
        ]);
        \App\Models\User::create([
            'nik' => '22104410057',
            'name' => 'Rafi Ari Fiandi',
            'email' => 'fiandi@gmail.com',
            'password' => bcrypt('password'),
            'position_id' => 1
        ]);

        $data = [
            ['22104410004', 'MUHAMMAD IKHSAN', 'ikhsan@example.com', bcrypt('password'), 3],
            ['22104410006', 'DIVA ALDITA PUTRI SAFFANAH SAIDIYAH', 'diva@example.com', bcrypt('password'), 3],
            ['22104410010', 'VIRGANDA RIMBA ASMARA', 'virganda@example.com', bcrypt('password'), 3],
            ['22104410011', 'ZOULVIA HANEST KHINANTI', 'zoulvia@example.com', bcrypt('password'), 3],
            ['22104410012', 'ALDY IBNU FAIZAL', 'aldy@example.com', bcrypt('password'), 3],
            ['22104410013', 'RIZKY YUNIZ TERESYA', 'rizky@example.com', bcrypt('password'), 3],
            ['22104410015', 'MUHAMMAD ROHID AL FARUQ', 'rohid@example.com', bcrypt('password'), 3],
            ['22104410017', 'TANDIYO DWI OKTAVIAN', 'tandiyo@example.com', bcrypt('password'), 3],
            ['22104410018', 'WAHYU NUR IBRAHIM', 'wahyu@example.com', bcrypt('password'), 3],
            ['22104410021', 'UMI HANIK', 'umi@example.com', bcrypt('password'), 3],
            ['22104410026', 'KHARIRATUL ISTIQLALIYAH', 'khariratul@example.com', bcrypt('password'), 3],
            ['22104410028', 'EKA PRASETIAWAN', 'eka@example.com', bcrypt('password'), 3],
            ['22104410029', 'SETYO ARI RAMADHAN', 'setyo@example.com', bcrypt('password'), 3],
            ['22104410032', 'AFIANA SEPTI LAILI', 'afiana@example.com', bcrypt('password'), 3],
            ['22104410033', 'BAGUS DZAKIY RAHMAN SAPUTRA', 'bagus@example.com', bcrypt('password'), 3],
            ['22104410034', 'ADITYA AKBAR RIZKY KARINDRA', 'aditya@example.com', bcrypt('password'), 3],
            ['22104410035', 'MUHAMMAD DANISH HAFIZZI', 'danish@example.com', bcrypt('password'), 3],
            ['22104410037', 'IBNU ABIZAID FISABILILLAH', 'ibnu@example.com', bcrypt('password'), 3],
            ['22104410039', 'ERWAN', 'erwan@example.com', bcrypt('password'), 3],
            ['22104410044', 'ASSHYFFATUL ANA NI\'MAH', 'asshyffatul@example.com', bcrypt('password'), 3],
            ['22104410045', 'MUHAMMAD LAZUARDI AL GHIFFARY', 'lazuardi@example.com', bcrypt('password'), 3],
            ['22104410047', 'JONATHAN SETYA WIDAYAT', 'jonathan@example.com', bcrypt('password'), 3],
            ['22104410048', 'MOCHAMAD BRILIAN BANI ADAM', 'brilian@example.com', bcrypt('password'), 3],
            ['22104410049', 'INES RAHAYU TYAS', 'ines@example.com', bcrypt('password'), 3],
            ['22104410050', 'NABILLAH RACHELIA MEYSHITA', 'nabillah@example.com', bcrypt('password'), 3],
            ['22104410051', 'NIMAS AYU ANGGUN KHARISMA', 'nimas@example.com', bcrypt('password'), 3],
            ['22104410054', 'MUHAMAD GUS AMIX KUSUMA', 'amix@example.com', bcrypt('password'), 3],
            ['22104410055', 'JIHAN KHANSA NADHILA', 'jihan@example.com', bcrypt('password'), 3],
            ['22104410056', 'ANDRE RIZKY PANGESTU', 'andre@example.com', bcrypt('password'), 3],
            ['22104410059', 'YOGA RAMADHANI', 'yoga@example.com', bcrypt('password'), 3],
            ['22104410060', 'ADHI EKA SYAHPUTRA', 'adhi@example.com', bcrypt('password'), 3],
            ['22104410061', 'MUHAMMAD RAFA RUCHMADIANANTA', 'rafa@example.com', bcrypt('password'), 3],
            ['22104410062', 'BINTANG LAILATUL MUKAROMAH', 'bintang@example.com', bcrypt('password'), 3],
            ['22104410063', 'MOCH. ICHWAN ALIF KURNIAWAN', 'ichwan@example.com', bcrypt('password'), 3],
            ['22104410064', 'ADE EKA SAPUTRA', 'ade@example.com', bcrypt('password'), 3],
            ['22104410065', 'ALFIAN ANWAR SHODIQI', 'alfian@example.com', bcrypt('password'), 3],
        ];

        foreach ($data as $userData) {
            User::create([
                'nik' => $userData[0],
                'name' => $userData[1],
                'email' => $userData[2],
                'password' => $userData[3],
                'position_id' => $userData[4],
            ]);
        }

        $this->call([
            PositionSeeder::class,
            AdminSeeder::class,
            ManagerSeeder::class,
            StaffSeeder::class
        ]);
    }
}
