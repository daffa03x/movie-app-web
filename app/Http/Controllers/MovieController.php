<?php

namespace App\Http\Controllers;

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
        $no = 1;
        $movie = Movie::with(['genres','casts'])->get();
        return Inertia::render('Admin/Movie/Index',[
            'movie' => $movie,
            'no' => $no
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Movie/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $movie = Movie::create($request->all());
        $movie->genres()->sync($request->genres);
        $movie->casts()->sync($request->casts);
        return Redirect::to('/movie')->with('message','Success Create Movie!');
    }
}
