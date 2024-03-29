<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class GenreController extends Controller
{
        /**
     * Display the genre view.
     */
    public function index(): Response
    {
        $genre = Genre::latest()->paginate(5);
        $total = Genre::count();
        $no = 1;
        return Inertia::render('Admin/Genre/Index',[
            'genre' => $genre,
            'no' => $no,
            'total' => $total
        ]);
    }
        /**
     * Display the create genre view.
     */
    public function create(): Response
    {
        return Inertia::render('Admin/Genre/Create');
    }

    /**
     * Handle an store genre.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        Genre::create($request->validate([
            'name_genre' => ['required', 'max:50'],
          ]));
        return Redirect::to('/genre')->with('message','Success Create Genre!');
    }

    /**
     * Display the edit genre view.
     */
    public function edit($id): Response
    {
        $genre = Genre::find($id);
        return Inertia::render('Admin/Genre/Edit',[
            'genre' => $genre
        ]);
    }

    /**
     * Handle an update genre.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id): RedirectResponse
    {
        $genre = Genre::find($id);
        $request->validate([
            'name_genre' => ['required', 'max:50'],
        ]);
        $genre->update([
            'name_genre' => $request->name_genre
        ]);
        return Redirect::to('/genre')->with('message','Success Update Genre!');
    }

    /**
     * Handle an destroy genre.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function destroy($id): RedirectResponse
    {
        $genre = Genre::find($id);
        $genre->delete();
        return Redirect::to('/genre')->with('message','Success Delete Genre!');
    }
}
