Rails.application.routes.draw do
  use_doorkeeper do
    skip_controllers :authorizations, :applications, :authorized_applications
  end
  devise_for :users,
             defaults: { format: :json },
             path: '',
             path_names: {
               sign_in: 'bare_api/users/login',
               sign_out: 'bare_api/users/logout',
               registration: 'bare_api/users/sign_up'
             },
             controllers: {
               sessions: 'bare_api/users/sessions',
               registrations: 'bare_api/users/registrations'
             }

  namespace :bare_api, defaults: { format: :json } do
    namespace :users do
      resources :profiles, only: %i[index]
    end
    namespace :adverts do
      resources :adverts, only: %i[create show index]
    end
  end
end
