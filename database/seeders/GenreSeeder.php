<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::create([
            'name_genre' => 'Action'
        ]);
        Genre::create([
            'name_genre' => 'Horror'
        ]);
        Genre::create([
            'name_genre' => 'Thriller'
        ]);
        Genre::create([
            'name_genre' => 'Comedy'
        ]);
        Genre::create([
            'name_genre' => 'Drama'
        ]);
        Genre::create([
            'name_genre' => 'Romance'
        ]);
        Genre::create([
            'name_genre' => 'Fantasy'
        ]);
        Genre::create([
            'name_genre' => 'Documenter'
        ]);
    }
}
