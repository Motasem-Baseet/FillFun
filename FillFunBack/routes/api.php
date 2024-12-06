<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::get('/profile/{id}', [UserController::class, 'profile']);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/board/wishlist', [BoardController::class, 'addToWishlist']);
Route::delete('/board/wishlist', [BoardController::class, 'removeFromWishlist']);

Route::post('/board/history', [BoardController::class, 'addToHistory']);

Route::get('/profile/{id}', [ProfileController::class, 'getProfile']);



