package cn.herodotus.eurynome.component.security.exception;

/**
 * <p> Description : TODO </p>
 *
 * @author : gengwei.zheng
 * @date : 2020/1/26 18:11
 */
public class VerificationCodeIsEmptyException extends VerificationCodeException {

    public VerificationCodeIsEmptyException(String message) {
        super(message);
    }
}
