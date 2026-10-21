# VM de déploiement pour l'application « Ma Garderie »
Vagrant.configure("2") do |config|
  # Ubuntu Server 24.04 LTS
  config.vm.box = "bento/ubuntu-24.04"
  config.vm.hostname = "garderie-vm"

  # Réseau privé avec une adresse IP fixe
  config.vm.network "private_network", ip: "192.168.56.60"

  # Port SSH fixe pour éviter un conflit avec les autres VM
  config.vm.network "forwarded_port", guest: 22, host: 2204, id: "ssh"

  # Ressources : 2 Go de RAM et 2 vCPU
  config.vm.provider "virtualbox" do |vb|
    vb.name   = "garderie-vm"
    vb.memory = 2048
    vb.cpus   = 2
  end

  # Installe Ansible dans la VM (Ansible ne tourne pas sous Windows)
  config.vm.provision "shell",
    inline: "command -v ansible-playbook || (apt-get update && apt-get install -y ansible-core)"

  # Provisioning : exécute le playbook site.yml (rôle docker) dans la VM
  config.vm.provision "ansible_local" do |ansible|
    ansible.install           = false
    ansible.provisioning_path = "/vagrant/ansible"
    ansible.inventory_path    = "inventory.ini"
    ansible.playbook          = "site.yml"
    ansible.limit             = "all"
  end
end
