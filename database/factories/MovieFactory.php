<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(3),
            'release_date' => fake()->date(),
            'rating' => rand(60,99),
            'duration' => rand(120,180),
            'synopsis' => fake()->sentence(5),
            'link_trailer' => fake()->url(),
            'image' => 'image/movie/2023-12/cover.jpeg'
        ];
    }
}
