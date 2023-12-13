<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\EditController;
use App\Http\Controllers\CreateController;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PresenceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

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


Route::middleware('guest')->group(function() {
    Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/', [AuthenticatedSessionController::class, 'store']);
});




Route::middleware('auth')->group(function () {
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/presence', [PresenceController::class, 'index'])->name('presence');

    Route::post('/presence', [PresenceController::class, 'presence'])->name('presence.submit');

    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    Route::get('/dashboard/create', [CreateController::class, 'index'])->name('create');

    Route::post('/dashboard/create', [CreateController::class, 'store']);

    Route::get('/dashboard/detail/{user:nik}', [DashboardController::class, 'show'])->name('dashboard.detail');

    Route::get('/dashboard/edit', [EditController::class, 'index'])->name('dashboard.edit');

    Route::get('/dashboard/delete/{user:nik}', [DashboardController::class, 'destroy'])->name('dashboard.destroy');

    Route::get('/dashboard/riwayat', [DashboardController::class, 'history'])->name('history');

    Route::get('dashboard/laporan', [DashboardController::class, 'statement'])->name('statement');

    Route::get('dashboard/laporan/detail/', [DashboardController::class, 'showLaporan']);

});

require __DIR__.'/auth.php';
