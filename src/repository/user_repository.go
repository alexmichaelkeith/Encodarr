package repository

import (
	"errors"
	"transfigurr/models"

	"github.com/jinzhu/gorm"
)

type UserRepository struct {
	DB *gorm.DB
}

var ErrRecordNotFound = errors.New("record not found")

func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{
		DB: db,
	}
}

func (repo *UserRepository) GetUser() (models.User, error) {
	var user models.User
	if err := repo.DB.Find(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return models.User{}, ErrRecordNotFound
		}
		return user, err
	}
	return user, nil
}

func (repo *UserRepository) UpdateUser(user models.User) error {
	return repo.DB.Save(user).Error
}