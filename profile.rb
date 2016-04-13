require 'sinatra'

get '/' do
  erb :about_me
end

get '/contact_me' do
  erb :contact_me
end
