<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class ApiTaskController extends Controller
{
    public function index() {
        $pendentTasks = Task::where('done', '<>', true)->get();

        return response()->json($pendentTasks, 200);
    }

    public function create(Request $request) {
      if (!$request->has('description')) {
        return response()->json('A descrição da tarefa é obrigatória', 400);
      }

      $task = new Task;
      $task->description = $request->input('description');
      $task->done = false;
      $task->save();

      return response()->json($task, 200);
    }

    public function done(Request $request, $id) {
      $task = Task::find($id);
      $task->done = true;

      $task->save();

      return response()->json($task, 200);
    }

    public function filterTask($palavra){
      $tasks = Task::
        where('description', 'like', '%'.$palavra.'%')
        ->where('done', '=', 0)
        ->get();

      return response()->json($tasks, 200);
    }

    public function delete(Request $request, $id){
        $task = Task::find($id);

        $task->delete();

        return response()->json($task, 200);
    }
}
