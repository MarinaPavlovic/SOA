package rs.ac.singidunum.apartment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rs.ac.singidunum.apartment.entity.ApartmentEntity;

import java.util.List;

public interface IApartmentRepository extends JpaRepository<ApartmentEntity, Integer> {


    @Query(nativeQuery = true, value = "SELECT * FROM apartmants WHERE destination_type= :type")
    List<ApartmentEntity> ApartmentTypeFilter (@Param("type") String type);

    @Query(nativeQuery = true, value = "SELECT * FROM apartmants WHERE user_id= :userId")
    List<ApartmentEntity> HostApartments (@Param("userId") Integer userId);



}
