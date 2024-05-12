package repository

import (
	"transfigurr/models"

	"github.com/jinzhu/gorm"
)

type AuthRepository struct {
	DB *gorm.DB
}

func NewAuthRepository(db *gorm.DB) *AuthRepository {
	return &AuthRepository{
		DB: db,
	}
}

func (repo *AuthRepository) GetUser() (models.User, error) {
	var user models.User
	if err := repo.DB.First(&user).Error; err != nil {
		return models.User{}, err
	}
	return user, nil
}

func (repo *AuthRepository) CreateUser(user models.User) error {
	if err := repo.DB.Create(user).Error; err != nil {
		return err
	}
	return nil
}