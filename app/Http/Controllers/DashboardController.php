<?php

namespace App\Http\Controllers;

use App\Models\Cast;
use App\Models\Genre;
use App\Models\Movie;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $genre = Genre::count();
        $cast = Cast::count();
        $movie = Movie::count();
        $user = User::count();
        return Inertia::render('Admin/Dashboard',[
            'genre' => $genre,
            'cast' => $cast,
            'movie' => $movie,
            'user' => $user
        ]);
    }
}
