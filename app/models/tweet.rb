class Tweet < ApplicationRecord
  belongs_to :user

  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_user
  end

  def gravatar
    user.gravatar
  end
end
