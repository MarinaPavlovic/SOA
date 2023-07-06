package rs.ac.singidunum.comments.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.comments.entity.CommentEntity;

import java.util.List;


public interface ICommentRepository extends JpaRepository<CommentEntity, Integer> {

    @Query(nativeQuery = true , value = "SELECT * FROM comments WHERE apartment_id= :apartmentId")
    List<CommentEntity> apartmentComments (@Param("apartmentId") Integer apartmentId);
}
