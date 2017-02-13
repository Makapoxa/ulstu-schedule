namespace :jobs do
  task :work do
    sh 'foreman start'
  end
end
