<?php

namespace Database\Seeders;

use App\Models\Cast;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CastSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Cast::create([
            'name_cast' => 'Tom Holland',
            'occupation' => 'Aktor',
            'date_of_birth' => now(),
            'place_of_birth' => 'Amerika'
        ]);
        Cast::create([
            'name_cast' => 'Bae Suzy',
            'occupation' => 'Aktris',
            'date_of_birth' => now(),
            'place_of_birth' => 'Korea'
        ]);
        Cast::create([
            'name_cast' => 'Jisoo',
            'occupation' => 'Aktris',
            'date_of_birth' => now(),
            'place_of_birth' => 'Korea'
        ]);
    }
}
