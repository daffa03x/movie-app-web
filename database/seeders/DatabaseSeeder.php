<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(GenreSeeder::class);
        $this->call(CastSeeder::class);
        $this->call(UserSeeder::class);
        \App\Models\Cast::factory(100)->create();
        \App\Models\Movie::factory(200)->create();

    }
}
