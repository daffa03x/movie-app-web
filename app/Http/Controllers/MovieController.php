<?php

namespace App\Http\Controllers;

use App\Models\Cast;
use App\Models\Genre;
use App\Models\Movie;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{
    public function index(): Response
    {
        $total = Movie::count();
        $no = 1;
        $movie = Movie::with(['genres','casts'])->latest()->paginate(5);
        return Inertia::render('Admin/Movie/Index',[
            'movie' => $movie,
            'no' => $no,
            'total' => $total
        ]);
    }

    public function create(): Response
    {
        $genre = Genre::all();
        $cast = Cast::all();
        return Inertia::render('Admin/Movie/Create',[
            'cast' => $cast,
            'genre' => $genre
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $movie = Movie::create($request->all());
        $movie->genres()->sync($request->genre_id);
        $movie->casts()->sync($request->cast_id);
        return Redirect::to('/movie')->with('message','Success Create Movie!');
    }
}
