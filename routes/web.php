<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

//about
Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

//projects
Route::get('/projects', function () {
    return Inertia::render('projects');
})->name('projects');

//Contact
Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');
Route::post('/contact/send',[ContactController::class,'send']);

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
