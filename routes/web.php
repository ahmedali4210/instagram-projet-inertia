<?php

use App\Http\Controllers\Authcontroller;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth')->group(function(){
    // Route::get('/', function () {
    //     return inertia('Home');
    // })->name('home');

    Route::get('/', [PostController::class, 'index'])->name('home');
    Route::resource('posts', PostController::class);
});

Route::middleware('guest')->group(function(){
    Route::get('/register',[Authcontroller::class,'showRegister'])->name('register');
});

Route::get('/login',[Authcontroller::class, 'affiche']);
Route::post('/login',[Authcontroller::class,'login'])->name('login');

Route::post('/register',[Authcontroller::class, 'store'])->name('storeuser');

