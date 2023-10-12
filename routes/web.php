<?php

use App\Http\Controllers\CastController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::group(function () {
// });

Route::get('/', [HomeController::class, 'index']);


Route::middleware('auth')->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['verified'])
    ->name('dashboard');
    
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])
    ->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])
    ->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])
    ->name('profile.destroy');

    // Genre
    Route::get('/genre', [GenreController::class, 'index'])
    ->name('genre.index');
    Route::get('/genre/create', [GenreController::class, 'create'])
    ->name('genre.create');
    Route::post('/genre/store', [GenreController::class, 'store'])
    ->name('genre.store');
    Route::get('/genre/edit/{id}', [GenreController::class, 'edit'])
    ->name('genre.edit');
    Route::put('/genre/update/{id}', [GenreController::class, 'update'])
    ->name('genre.update');
    Route::delete('/genre/delete/{id}', [GenreController::class, 'destroy'])
    ->name('genre.delete');

    // Cast
    Route::get('/cast', [CastController::class, 'index'])
    ->name('cast.index');
    Route::get('/cast/create', [CastController::class, 'create'])
    ->name('cast.create');
    Route::post('/cast/store', [CastController::class, 'store'])
    ->name('cast.store');
    Route::get('/cast/edit/{id}', [CastController::class, 'edit'])
    ->name('cast.edit');
    Route::put('/cast/update/{id}', [CastController::class, 'update'])
    ->name('cast.update');
    Route::delete('/cast/delete/{id}', [CastController::class, 'destroy'])
    ->name('cast.delete');

    // Movie
    Route::get('/movie', [MovieController::class, 'index'])
    ->name('movie.index');
});

require __DIR__.'/auth.php';
