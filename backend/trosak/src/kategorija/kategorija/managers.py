class CategoryManager():
    use_in_migrations = True

    def _create_category(self, name, **extra_fields):
        if not name:
            raise ValueError("The given name must be set")
        name = self.normalize_name(name)
        name = self.model(name=name, **extra_fields)
        return name