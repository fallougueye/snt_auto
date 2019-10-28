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

Route::get('generate-pdf','HomeController@generatePDF');


//Route::POST('upload', 'StudentController@upload')->name('file.upload');


Route::get('participant/{id}', 'StudentController@participant')->name('participant.show');

Route::get('Enseignant/{id}', 'EnseignantController@Enseignant')->name('Enseignant.show');

Route::get('/ajouter', 'EnseignantController@ajouter')->name('entreprise.ajouter');
Route::post('/ajouter', 'EnseignantController@ajouter_entreprise');


Route::get('/contrat', function () {
    return view('contrat');     
});

Route::group(['middleware' => 'Connecter'], function(){

    Route::resource('students', 'StudentController');

    Route::resource('enseignants', 'EnseignantController');

});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
