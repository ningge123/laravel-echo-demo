<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('messages', function () {
    return \App\Message::with('user')->get();
})->middleware('auth');;

Route::post('messages', function (\Illuminate\Http\Request $request) {
    $message = $request->user()->message()->create($request->all());
    $message->load('user');

    broadcast(new \App\Events\PushMessageEvent($message, $request->user()))->toOthers();

    return $message;
})->middleware('auth');