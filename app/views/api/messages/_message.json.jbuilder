json.merge! message.attributes
json.user do
  json.id message.user.id
  json.username message.user.username
  json.img_url asset_path(message.user.img_url)
end
json.channel do
  json.partial! 'shared/channel.json.jbuilder', channel: message.channel
end
