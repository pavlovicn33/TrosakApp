class TaskManager():
    use_in_migrations = True

    def _create_category(self, name,iznos, **extra_fields):
        if not name:
            raise ValueError("The given name must be set")
        if iznos > 0:
            name = "trosak"
            return name
        name = "priliv"
        return name