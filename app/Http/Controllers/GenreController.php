<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GenreController extends Controller
{
        /**
     * Display the genre view.
     */
    public function index(): Response
    {
        $genre = Genre::all();
        return Inertia::render('Genre/Index',[
            'genre' => $genre
        ]);
    }
}
