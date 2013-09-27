get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/click' do
  content_type :json

  {quote: "this is a cool quote", author: "Its ya boi hova"}.to_json
end

post '/echo' do

  if request.xhr?
    @echo = params[:user_input]

    erb :_echo, :layout => false
  else
      @echo = params[:user_input]
  end

end
