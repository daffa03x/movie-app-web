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
            'name_cast' => 'Tom Holland'
        ]);
        Cast::create([
            'name_cast' => 'Bae Suzy'
        ]);
        Cast::create([
            'name_cast' => 'Jisoo'
        ]);
    }
}
