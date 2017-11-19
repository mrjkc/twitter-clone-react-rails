# User model class
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # serialize as json, serialized json
  def as_json(_options = {})
    { id: id, name: display_user, gravatar: gravatar }
  end

  def display_user
    first_name.present? ? "#{first_name} #{last_name}" : email
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
    "http://www.gravatar.com/avatar/#{hash}"
  end
end
