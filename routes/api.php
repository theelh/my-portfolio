<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\AiChatbotController;

Route::post('/chatbot', [AiChatbotController::class, 'sendMessage'])
    ->middleware('throttle:20,1');
