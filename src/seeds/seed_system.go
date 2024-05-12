package seeds

import (
	"transfigurr/models"

	"github.com/jinzhu/gorm"
)

func SeedSystems(db *gorm.DB) {
	if !db.HasTable(&models.Seed{}) {
		db.CreateTable(&models.Seed{})
		db.Model(&models.Seed{}).AddUniqueIndex("Idx_name", "name")
	}

	var seed models.Seed
	db.Where("name = ?", "SeedSettings").First(&seed)
	if seed.Name == "SeedSettings" {
		return
	}
	defaultSystems := []models.System{

		{

			Id:    "series_count",
			Value: "0",
		},
		{
			Id:    "movies_count",
			Value: "0",
		},
		{
			Id:    "monitored_count",
			Value: "0",
		},
		{
			Id:    "unmonitored_count",
			Value: "0",
		},
		{
			Id:    "ended_count",
			Value: "0",
		},
		{
			Id:    "continuing_count",
			Value: "0",
		},
		{
			Id:    "episode_count",
			Value: "0",
		},
		{
			Id:    "files_count",
			Value: "0",
		},
		{
			Id:    "size_on_disk",
			Value: "0",
		},
		{
			Id:    "space_saved",
			Value: "0",
		},
		{
			Id:    "series_total_space",
			Value: "0",
		},
		{
			Id:    "movies_total_space",
			Value: "0",
		},
		{
			Id:    "series_free_space",
			Value: "0",
		},
		{
			Id:    "movies_free_space",
			Value: "0",
		},
		{
			Id:    "config_free_space",
			Value: "0",
		},
		{
			Id:    "config_total_space",
			Value: "0",
		},
		{
			Id:    "transcode_free_space",
			Value: "0",
		},
		{
			Id:    "transcode_total_space",
			Value: "0",
		},
		{
			Id:    "scan_running",
			Value: "0",
		},
		{
			Id:    "scan_target",
			Value: "",
		},
		{
			Id:    "metadata_running",
			Value: "0",
		},
		{
			Id:    "metadata_target",
			Value: "",
		},
		{
			Id:    "start_time",
			Value: "",
		},
	}

	for _, defaultSystem := range defaultSystems {
		db.Create(&defaultSystem)
	}

	db.Create(&models.Seed{Name: "SeedSystems"})
}